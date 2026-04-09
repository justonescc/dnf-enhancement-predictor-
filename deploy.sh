#!/bin/bash

# 部署脚本 - 一键部署到 GitHub Pages

set -e

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 打印带颜色的消息
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# 检查 Git 状态
check_git_status() {
    print_message "$BLUE" "📊 检查 Git 状态..."
    git status

    echo ""
    read -p "是否继续部署? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_message "$YELLOW" "❌ 部署已取消"
        exit 1
    fi
}

# 添加并提交更改
commit_changes() {
    print_message "$BLUE" "📝 提交更改..."

    # 获取提交信息
    if [ -z "$1" ]; then
        read -p "请输入提交信息: " commit_msg
    else
        commit_msg="$1"
    fi

    git add .
    git commit -m "$commit_msg" || {
        print_message "$YELLOW" "⚠️  没有新的更改需要提交"
    }
}

# 推送到 GitHub
push_to_github() {
    print_message "$BLUE" "🚀 推送到 GitHub..."
    git push origin main

    if [ $? -eq 0 ]; then
        print_message "$GREEN" "✅ 成功推送到 GitHub!"
    else
        print_message "$RED" "❌ 推送失败!"
        exit 1
    fi
}

# 部署到 GitHub Pages
deploy_to_pages() {
    print_message "$BLUE" "🌐 部署到 GitHub Pages..."
    npm run deploy

    if [ $? -eq 0 ]; then
        print_message "$GREEN" "✅ 成功部署到 GitHub Pages!"
    else
        print_message "$RED" "❌ 部署失败!"
        exit 1
    fi
}

# 显示部署信息
show_deployment_info() {
    echo ""
    print_message "$GREEN" "======================================"
    print_message "$GREEN" "🎉 部署完成!"
    print_message "$GREEN" "======================================"
    echo ""
    print_message "$BLUE" "📦 部署信息..."
    echo ""
    print_message "$YELLOW" "访问地址："
    echo "  • GitHub Pages: https://justonescc.github.io/dnf-enhancement-predictor-/"
    echo "  • Netlify (备用): https://chipper-otter-26da1b.netlify.app"
    echo ""
    print_message "$BLUE" "⏱️  预计 1-2 分钟后部署完成"
    echo ""
    print_message "$BLUE" "📊 查看部署状态："
    echo "  • GitHub: https://github.com/justonescc/dnf-enhancement-predictor-/settings/pages"
    echo ""
}

# 主函数
main() {
    print_message "$GREEN" "=========================================="
    print_message "$GREEN" "   一键部署脚本 - GitHub Pages"
    print_message "$GREEN" "=========================================="
    echo ""

    # 检查参数
    if [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
        echo "用法: ./deploy.sh [提交信息]"
        echo ""
        echo "示例:"
        echo "  ./deploy.sh                    # 交互式输入提交信息"
        echo "  ./deploy.sh \"fix: 修复 bug\"    # 使用指定的提交信息"
        echo ""
        echo "功能:"
        echo "  1. 检查 Git 状态"
        echo "  2. 添加并提交更改"
        echo "  3. 推送到 GitHub main 分支"
        echo "  4. 部署到 GitHub Pages"
        exit 0
    fi

    # 执行部署流程
    check_git_status
    commit_changes "$1"
    push_to_github
    deploy_to_pages
    show_deployment_info
}

# 运行主函数
main "$@"

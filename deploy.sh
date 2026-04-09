#!/bin/bash

# 部署脚本 - 一键部署到 GitHub 并自动触发外网部署

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

# 显示部署信息
show_deployment_info() {
    echo ""
    print_message "$GREEN" "======================================"
    print_message "$GREEN" "🎉 部署流程已启动!"
    print_message "$GREEN" "======================================"
    echo ""
    print_message "$BLUE" "📦 自动部署中..."
    echo ""
    print_message "$YELLOW" "外网访问地址："
    echo "  • Vercel: https://dnf-enhancement-predictor.vercel.app"
    echo "  • Netlify: https://你的项目名.netlify.app"
    echo ""
    print_message "$BLUE" "⏱️  预计 1-3 分钟后部署完成"
    echo ""
    print_message "$BLUE" "📊 查看部署状态："
    echo "  • Vercel: https://vercel.com/dashboard"
    echo "  • Netlify: https://app.netlify.com/"
    echo ""
}

# 主函数
main() {
    print_message "$GREEN" "=========================================="
    print_message "$GREEN" "   一键部署脚本 - GitHub → 外网"
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
        echo "  3. 推送到 GitHub"
        echo "  4. 触发自动部署到 Vercel/Netlify"
        exit 0
    fi

    # 执行部署流程
    check_git_status
    commit_changes "$1"
    push_to_github
    show_deployment_info
}

# 运行主函数
main "$@"

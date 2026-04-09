#!/bin/bash

echo "🚀 DNF增幅预测器 - 自动部署到Vercel"
echo "================================"
echo ""

# 获取Git用户名
GIT_EMAIL=$(git config user.email)
echo "📧 Git邮箱: $GIT_EMAIL"
echo ""

echo "步骤1：创建GitHub仓库"
echo "----------------------------"
echo "请手动创建仓库："
echo "1. 访问: https://github.com/new"
echo "2. 仓库名: dnf-enhancement-predictor"
echo "3. 选择Public或Private"
echo "4. 点击Create repository"
echo ""
echo "按回车继续..."
read

echo ""
echo "步骤2：输入你的GitHub用户名:"
read GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ 用户名不能为空"
    exit 1
fi

REPO_URL="https://github.com/$GITHUB_USERNAME/dnf-enhancement-predictor.git"

echo ""
echo "步骤3：推送代码到GitHub"
echo "----------------------------"
git remote add origin $REPO_URL 2>/dev/null || git remote set-url origin $REPO_URL
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 代码推送成功！"
    echo ""
    echo "步骤4：部署到Vercel"
    echo "----------------------------"
    echo "1. 访问: https://vercel.com/new"
    echo "2. 使用GitHub账号授权"
    echo "3. 选择 dnf-enhancement-predictor 仓库"
    echo "4. 点击 Deploy"
    echo ""
    echo "🎉 部署完成后访问："
    echo "https://dnf-enhancement-predictor.vercel.app"
    echo ""
    echo "或者你的自定义域名"
    echo ""
    echo "GitHub仓库: https://github.com/$GITHUB_USERNAME/dnf-enhancement-predictor"
else
    echo "❌ 推送失败，请检查："
    echo "1. GitHub用户名是否正确"
    echo "2. 网络连接是否正常"
    echo "3. GitHub权限是否正确"
    exit 1
fi

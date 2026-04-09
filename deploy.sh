#!/bin/bash

echo "🚀 DNF增幅预测器 - 快速部署脚本"
echo "================================"
echo ""
echo "步骤1：创建GitHub仓库"
echo "----------------------------"
echo "1. 访问: https://github.com/new"
echo "2. 仓库名: dnf-enhancement-predictor"
echo "3. 选择Public或Private"
echo "4. 点击Create repository"
echo ""
echo "创建完成后，请输入你的GitHub用户名:"
read github_username

if [ -z "$github_username" ]; then
    echo "❌ 用户名不能为空"
    exit 1
fi

REPO_URL="https://github.com/$github_username/dnf-enhancement-predictor.git"

echo ""
echo "步骤2：推送代码到GitHub"
echo "----------------------------"
git remote add origin $REPO_URL 2>/dev/null || git remote set-url origin $REPO_URL
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 代码推送成功！"
    echo ""
    echo "步骤3：部署到Vercel"
    echo "----------------------------"
    echo "1. 访问: https://vercel.com"
    echo "2. 使用GitHub账号登录"
    echo "3. 点击 New Project"
    echo "4. 选择 dnf-enhancement-predictor 仓库"
    echo "5. 点击 Deploy"
    echo ""
    echo "🎉 部署完成后，你会获得外网访问地址！"
    echo ""
    echo "你的仓库地址: https://github.com/$github_username/dnf-enhancement-predictor"
else
    echo "❌ 推送失败，请检查网络连接或GitHub权限"
    exit 1
fi

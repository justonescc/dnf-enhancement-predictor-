# 🚀 快速启动指南

## 一键部署（最简单）

```bash
# 方式 1：使用脚本（推荐）
./deploy.sh "fix: 修复了计算错误"

# 方式 2：手动命令
git add .
git commit -m "你的提交信息"
git push origin main
```

## 📱 外网访问地址

- **Vercel**: https://dnf-enhancement-predictor.vercel.app
- **Netlify**: （配置后显示）

## 🔄 完整工作流

```
本地开发 → Git 提交 → GitHub 推送 → 自动部署 → 外网访问
    ↓           ↓            ↓            ↓          ↓
  修改代码   git add .   git push    等待1-3分钟   全球可访问
            git commit
```

## 📝 常用命令

```bash
# 查看状态
git status

# 添加所有更改
git add .

# 提交更改
git commit -m "描述你的修改"

# 推送到 GitHub
git push origin main

# 查看部署日志
vercel logs     # Vercel
netlify logs    # Netlify
```

## 🎯 提交信息格式

```bash
git commit -m "feat: 添加新功能"
git commit -m "fix: 修复 bug"
git commit -m "docs: 更新文档"
git commit -m "perf: 性能优化"
git commit -m "refactor: 代码重构"
```

## ⚡ 快速部署步骤

1. **修改代码**
2. **运行**: `./deploy.sh "你的提交信息"`
3. **等待**: 1-3 分钟自动部署
4. **访问**: 外网地址查看更新

## 🔧 遇到问题？

### 推送失败
```bash
# 检查 SSH 连接
ssh -T git@github.com

# 重新配置远程仓库
git remote set-url origin git@github.com:justonescc/dnf-enhancement-predictor-.git
```

### 部署失败
```bash
# 本地测试构建
npm run build

# 查看 Vercel 部署日志
# 访问: https://vercel.com/dashboard
```

### 查看部署状态
- Vercel: https://vercel.com/dashboard
- Netlify: https://app.netlify.com/

## 📚 详细文档

查看完整部署流程：[DEPLOYMENT_WORKFLOW.md](./DEPLOYMENT_WORKFLOW.md)

---

**记住**：只需要 `git push origin main`，一切自动完成！✨

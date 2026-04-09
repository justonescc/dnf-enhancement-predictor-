# 🚀 快速启动指南

## 一键部署（最简单）

```bash
# 推荐方式：使用部署脚本
./deploy.sh "fix: 修复了计算错误"

# 或者直接部署
npm run deploy
```

## 📱 外网访问地址

- **GitHub Pages**: https://justonescc.github.io/dnf-enhancement-predictor-/ （主要）
- **Netlify**: https://chipper-otter-26da1b.netlify.app （备用）

## 🔄 完整工作流

```
本地开发 → Git 提交 → 推送到 GitHub Pages → 外网访问
    ↓           ↓              ↓                  ↓
  修改代码   git add .    npm run deploy      全球可访问
            git commit
```

## 📝 常用命令

```bash
# 开发
npm run dev              # 启动开发服务器

# 构建
npm run build            # 构建生产版本

# 部署
npm run deploy           # 部署到 GitHub Pages

# Git 操作
git status               # 查看状态
git add .                # 添加所有更改
git commit -m "描述"      # 提交更改
git push origin main     # 推送到 GitHub
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
2. **本地测试**: `npm run dev`
3. **部署**: `npm run deploy`
4. **访问**: https://justonescc.github.io/dnf-enhancement-predictor-/
5. **等待**: 1-2 分钟让 GitHub Pages 更新

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

# 手动部署
npx gh-pages -d dist
```

### 页面 404
- 检查 vite.config.js 中的 base 路径
- 等待 1-2 分钟让 GitHub Pages 处理
- 访问 GitHub 仓库的 Pages 设置

### 查看部署状态
- GitHub: 仓库 Settings → Pages
- 检查 gh-pages 分支的提交历史

## 📚 详细文档

查看完整部署流程：[README_DEPLOYMENT.md](./README_DEPLOYMENT.md)

---

**记住**：只需要 `npm run deploy`，一切自动完成！✨

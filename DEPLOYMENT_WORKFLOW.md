# 部署工作流完整指南

## 📋 概述

本地开发 → Git 推送 → GitHub → 自动部署到 Vercel/Netlify → 外网访问

---

## 🚀 快速开始

### 方案一：使用 SSH（推荐）

```bash
# 1. 本地开发
git add .
git commit -m "你的提交信息"

# 2. 推送到 GitHub（已配置 SSH）
git push origin main

# 3. 自动部署
# - Vercel 会自动检测 GitHub 推送并部署
# - Netlify 会自动检测 GitHub 推送并部署
# - 通常 1-3 分钟完成

# 4. 访问外网地址
# Vercel: https://dnf-enhancement-predictor.vercel.app
# Netlify: https://你的项目名.netlify.app
```

---

## 🔧 完整配置步骤

### 第一步：配置 SSH 密钥

```bash
# 1. 生成 SSH 密钥
ssh-keygen -t ed25519 -C "你的邮箱@example.com"

# 2. 查看公钥
cat ~/.ssh/id_ed25519.pub

# 3. 添加到 GitHub
# 访问：https://github.com/settings/keys
# 点击 "New SSH key"，粘贴公钥

# 4. 测试连接
ssh -T git@github.com
```

### 第二步：配置 Git 远程仓库

```bash
# 切换到 SSH 方式（更稳定）
git remote set-url origin git@github.com:justonescc/dnf-enhancement-predictor-.git

# 验证配置
git remote -v
```

### 第三步：配置自动部署

#### Vercel 自动部署

1. **访问 Vercel**: https://vercel.com/dashboard
2. **导入项目**：
   - 点击 "Add New Project"
   - 从 GitHub 导入仓库 `justonescc/dnf-enhancement-predictor-`
3. **配置构建设置**（自动检测）：
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "installCommand": "npm install"
   }
   ```
4. **启用自动部署**：
   - 确保 "Deploy Hooks" 启用
   - 每次推送到 main 分支会自动部署

#### Netlify 自动部署

1. **访问 Netlify**: https://app.netlify.com/
2. **添加站点**：
   - 点击 "Add new site" → "Import an existing project"
   - 选择 GitHub 仓库
3. **配置构建设置**：
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   ```
4. **启用自动部署**：
   - 确保 "Deploy hooks" 启用

---

## 📝 日常部署流程

### 标准部署流程

```bash
# 1. 修改代码后，查看状态
git status

# 2. 添加修改的文件
git add .
# 或者添加特定文件
git add 文件名

# 3. 提交更改
git commit -m "描述你的修改"

# 4. 推送到 GitHub
git push origin main

# 5. 等待自动部署（1-3分钟）
# 可以在 Vercel/Netlify 控制台查看进度
```

### 提交信息规范

```bash
# 新功能
git commit -m "feat: 添加用户登录功能"

# 修复 bug
git commit -m "fix: 修复计算错误"

# 更新文档
git commit -m "docs: 更新部署说明"

# 性能优化
git commit -m "perf: 优化加载速度"

# 重构代码
git commit -m "refactor: 重构数据存储模块"
```

---

## 🌐 访问地址管理

### Vercel 地址

- **生产环境**：https://dnf-enhancement-predictor.vercel.app
- **每次部署**：自动更新，无需手动操作
- **预览环境**：每次 PR 会生成预览链接

### Netlify 地址

- **生产环境**：https://你的项目名.netlify.app
- **部署历史**：https://app.netlify.com/sites/你的项目名/deployments

### 自定义域名（可选）

```bash
# Vercel 添加自定义域名
# 1. 访问 Vercel 项目设置
# 2. 点击 "Domains"
# 3. 添加你的域名
# 4. 配置 DNS 记录

# Netlify 添加自定义域名
# 1. 访问 Netlify 站点设置
# 2. 点击 "Domain management"
# 3. 添加自定义域名
```

---

## 🔐 环境变量管理

### 本地开发环境变量

```bash
# .env.local 文件（不要提交到 Git）
VITE_API_KEY=your_local_key
VITE_API_URL=http://localhost:3000
```

### 生产环境变量

#### Vercel 环境变量

1. 访问：https://vercel.com/justonesccs-projects/你的项目/settings/environment-variables
2. 添加变量：
   ```
   VITE_API_KEY=your_production_key
   VITE_API_URL=https://api.example.com
   ```
3. 重新部署以应用变量

#### Netlify 环境变量

1. 访问：https://app.netlify.com/sites/你的站点/settings/deploys
2. 在 "Environment variables" 部分添加变量
3. 重新部署

---

## 🛠️ 常见问题解决

### 问题 1：推送失败

```bash
# 检查远程仓库状态
git remote -v

# 如果使用 HTTPS，token 过期需重新生成
git remote set-url origin git@github.com:用户名/仓库.git

# 测试连接
ssh -T git@github.com
```

### 问题 2：自动部署未触发

```bash
# 检查 GitHub webhook 状态
# 1. 访问 GitHub 仓库设置
# 2. 点击 "Webhooks"
# 3. 检查 Vercel/Netlify webhook 是否激活

# 手动触发部署
# Vercel: 访问 Vercel 控制台，点击 "Redeploy"
# Netlify: 访问 Netlify 控制台，点击 "Trigger deploy"
```

### 问题 3：部署失败

```bash
# 检查构建日志
# Vercel: https://vercel.com/你的项目 deployments
# Netlify: https://app.netlify.com/sites/你的站点/deploys

# 本地测试构建
npm run build

# 检查 node 版本
node -v  # 确保 18.x
```

---

## 📊 部署监控

### 查看部署状态

```bash
# Vercel CLI
vercel list

# Netlify CLI
netlify deploy:list
```

### 设置部署通知

1. **Vercel**：
   - 访问项目设置
   - 配置 Slack/Email 通知

2. **Netlify**：
   - 访问站点设置
   - 配置部署通知

---

## 🎯 最佳实践

### 1. 分支管理

```bash
# 开发新功能时创建分支
git checkout -b feature/new-feature

# 完成后合并到 main
git checkout main
git merge feature/new-feature
git push origin main
```

### 2. 部署前检查

```bash
# 本地构建测试
npm run build

# 本地预览
npm run preview

# 检查代码
npm run lint  # 如果有配置
```

### 3. 备份策略

```bash
# 定期推送代码
git push origin main --all

# 打标签
git tag -a v1.0.0 -m "版本 1.0.0"
git push origin v1.0.0
```

---

## 📞 快速参考

| 操作 | 命令 |
|------|------|
| 查看状态 | `git status` |
| 添加文件 | `git add .` |
| 提交 | `git commit -m "信息"` |
| 推送 | `git push origin main` |
| 拉取更新 | `git pull origin main` |
| 查看日志 | `git log --oneline -10` |
| Vercel 部署 | `vercel --prod` |
| Netlify 部署 | `netlify deploy --prod` |

---

## 🎉 完成部署

现在你可以：
1. ✅ 在本地开发
2. ✅ 推送到 GitHub
3. ✅ 自动部署到外网
4. ✅ 从任何地方访问你的应用

**外网访问地址**：
- Vercel: https://dnf-enhancement-predictor.vercel.app
- Netlify: （配置后自动生成）

---

*最后更新：2026-04-09*

# 🎯 部署方案总结

## ✅ 完整的部署架构

```
┌─────────────┐
│  本地开发    │
│  (MacBook)  │
└──────┬──────┘
       │ git push
       ↓
┌─────────────┐
│   GitHub    │
│  代码仓库   │
└──────┬──────┘
       │ gh-pages 分支
       ↓
┌─────────────┐
│ GitHub Pages│
│  静态托管   │
└──────┬──────┘
       │
       ↓
┌─────────────┐
│外网访问地址  │
│github.io    │
└─────────────┘
```

## 📦 关键文件

1. **vite.config.js** - 包含 GitHub Pages 路径配置
2. **package.json** - 包含部署脚本
3. **netlify.toml** - Netlify 部署配置（备用）

## 🚀 使用方法

### 最简单的方式（推荐）

```bash
# 1. 修改代码
# 2. 运行部署命令
npm run deploy

# 完成！等待 1-2 分钟自动部署
```

### 手动方式

```bash
# 1. 构建项目
npm run build

# 2. 部署到 GitHub Pages
npx gh-pages -d dist
```

## 🔑 关键配置

### Git 远程仓库（SSH）
```bash
origin  git@github.com:justonescc/dnf-enhancement-predictor-.git
```

### Vite 配置
```javascript
// vite.config.js
base: '/dnf-enhancement-predictor-/'
```

### 部署脚本
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## 🌐 外网访问地址

### 生产环境（主要）
- **GitHub Pages**: https://justonescc.github.io/dnf-enhancement-predictor-/

### 备用环境
- **Netlify**: https://chipper-otter-26da1b.netlify.app

## 📋 部署检查清单

在部署前确保：

- [ ] 代码已测试（`npm run build`）
- [ ] 路径配置正确（vite.config.js 中的 base）
- [ ] 环境变量已配置（如需要）
- [ ] `.gitignore` 已正确配置
- [ ] SSH 密钥已添加到 GitHub

## 🛡️ 安全配置

### 已忽略的文件（不会提交到 Git）
- `.env.local` - 本地环境变量
- `node_modules/` - 依赖包
- `dist/` - 构建输出
- `.netlify/` - Netlify 本地配置

### 环境变量管理
- **本地开发**: `.env.local`（不提交）
- **生产环境**: 在 GitHub Settings 中配置（如需要）

## 🔧 故障排除

### 部署失败
```bash
# 检查构建
npm run build

# 手动部署
npx gh-pages -d dist -m "Update"
```

### 页面 404
- 检查 vite.config.js 中的 base 路径是否正确
- 等待 1-2 分钟让 GitHub Pages 重新部署
- 确认 gh-pages 分支已推送

### 样式丢失
- 检查资源路径是否包含正确的 base 路径
- 清除浏览器缓存重试

## 📊 监控和维护

### 查看部署状态
- GitHub: 访问仓库 Settings → Pages
- 检查 gh-pages 分支的提交历史

### 性能优化
- 代码分割已配置
- 静态资源缓存已启用
- CSS 和 JS 已压缩

## 🎉 更新部署流程

1. **修改代码**
   ```bash
   # 编辑源代码
   ```

2. **本地测试**
   ```bash
   npm run dev
   ```

3. **部署**
   ```bash
   npm run deploy
   ```

4. **验证**
   - 访问 https://justonescc.github.io/dnf-enhancement-predictor-/
   - 等待 1-2 分钟查看更新

## 📞 快速参考

### 常用命令
```bash
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run deploy       # 部署到 GitHub Pages
npm run preview      # 预览构建结果
```

### 重要链接
- GitHub 仓库: https://github.com/justonescc/dnf-enhancement-predictor-
- GitHub Pages: https://justonescc.github.io/dnf-enhancement-predictor-/

---

**记住**：现在只需要 `npm run deploy`，一切自动完成！🎉

---

*更新日期：2026-04-09*
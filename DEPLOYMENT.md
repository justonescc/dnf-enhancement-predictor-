# 部署到Vercel指南

## 步骤1：推送到GitHub

```bash
# 创建GitHub仓库后，执行以下命令：
git remote add origin <你的GitHub仓库URL>
git branch -M main
git push -u origin main
```

## 步骤2：连接到Vercel

1. 访问 https://vercel.com
2. 使用GitHub账号登录
3. 点击"New Project"
4. 选择刚才的GitHub仓库
5. 点击"Deploy"

## 步骤3：配置

Vercel会自动检测Vite项目并配置：

- **Framework Preset**: Vite
- **Build Command**: npm run build
- **Output Directory**: dist

## 步骤4：部署完成

部署完成后，Vercel会提供一个外网访问链接，格式类似：
- https://your-project-name.vercel.app

## 验证部署

1. 访问Vercel提供的链接
2. 测试所有功能：
   - 选择增幅目标
   - 垫徽章并记录结果
   - 查看实时分析
   - 查看历史记录

## 自动部署

每次推送代码到main分支，Vercel会自动重新部署。

## 自定义域名（可选）

1. 在Vercel项目设置中，点击"Domains"
2. 添加自定义域名
3. 按照提示配置DNS记录

## 完成状态

- ✅ 代码已准备完成
- ✅ 构建配置已就绪
- ✅ 等待推送到GitHub

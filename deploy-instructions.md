# 🚀 DNF增幅预测器 - 外网部署指南

## 方法1：最简单（5分钟）

### 步骤1：创建GitHub仓库
1. 打开浏览器，访问：https://github.com/new
2. 仓库名称输入：`dnf-enhancement-predictor`
3. 选择 Public（公开）或 Private（私有）
4. 点击 **"Create repository"** 按钮

### 步骤2：复制并运行命令
创建仓库后，GitHub会显示命令。**请复制你的GitHub用户名**，然后告诉我，我帮你执行推送！

或者你自己运行以下命令（替换`你的用户名`）：
```bash
git remote add origin https://github.com/你的用户名/dnf-enhancement-predictor.git
git branch -M main
git push -u origin main
```

### 步骤3：部署到Vercel
1. 访问：https://vercel.com/new
2. 点击 **"Import Project"**
3. 选择 **"GitHub"**
4. 找到并选择 `dnf-enhancement-predictor` 仓库
5. 点击 **"Deploy"** 按钮
6. 等待1分钟...

**完成！** 你会得到外网地址：`https://dnf-enhancement-predictor.vercel.app`

---

## 方法2：使用Gitee（国内更快）

### 步骤1：创建Gitee仓库
1. 访问：https://gitee.com/projects/new
2. 仓库名：`dnf-enhancement-predictor`
3. 点击"创建"

### 步骤2：推送代码
```bash
git remote add origin https://gitee.com/你的用户名/dnf-enhancement-predictor.git
git push -u origin main
```

### 步骤3：使用Vercel部署
Vercel也支持Gitee，或者使用其他平台如Netlify

---

## 💡 提示

**你的GitHub用户名是什么？**
告诉我后，我可以立即帮你执行推送命令！

**遇到问题？**
- GitHub需要验证？检查账号设置
- 推送失败？检查SSH密钥或使用HTTPS
- Vercel部署失败？检查构建日志

---

**项目已100%完成，随时可以部署！** 🎉
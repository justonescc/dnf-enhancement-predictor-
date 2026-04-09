# 🚀 推送代码到GitHub - 身份验证

## 方法1：使用Personal Access Token（最简单）

### 步骤1：创建Token
1. 访问：https://github.com/settings/tokens
2. 点击 **"Generate new token"** → **"Generate new token (classic)"**
3. 勾选 **"repo"** 权限
4. 点击 **"Generate token"**
5. **复制token**（只显示一次！）

### 步骤2：推送代码
```bash
git push -u origin main
```
用户名输入：`justonescc`
密码输入：`粘贴你的token`

---

## 方法2：使用GitHub CLI（推荐）

### 安装GitHub CLI
```bash
# macOS
brew install gh

# 登录
gh auth login
```

### 推送代码
```bash
gh repo create dnf-enhancement-predictor --public --source=. --remote=origin --push
```

---

## 方法3：使用SSH密钥

```bash
# 生成SSH密钥
ssh-keygen -t ed25519 -C "your_email@example.com"

# 添加到GitHub
# 复制 ~/.ssh/id_ed25519.pub 内容到
# https://github.com/settings/keys

# 切换到SSH URL
git remote set-url origin git@github.com:justonescc/dnf-enhancement-predictor.git

# 推送
git push -u origin main
```

---

## ⚡ 最快方法（现在就用）

**直接在终端运行：**
```bash
git push -u origin main
```

然后：
1. 用户名：`justonescc`
2. 密码：**你的GitHub Personal Access Token**

**获取Token地址：** https://github.com/settings/tokens

---

**完成后，立即部署到Vercel：**
https://vercel.com/new?utm_source=github
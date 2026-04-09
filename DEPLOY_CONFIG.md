# 部署配置说明

## 📝 配置文件

### 1. 编辑 `.env.local` 填入你的信息

```bash
# 使用你喜欢的编辑器打开
open .env.local
```

填入以下信息：
- `GITEE_PASSWORD` - 你的Gitee账号密码
- `GITHUB_TOKEN` - GitHub访问令牌（可选）

### 2. 使用快捷命令推送

```bash
# 加载配置
source .env.local

# 推送到Gitee
git push https://${GITEE_USERNAME}:${GITEE_PASSWORD}@gitee.com/13998919101/dnf-enhancement-predictor.git main
```

---

## 🔐 安全提示

✅ **已配置安全措施**：
- `.env.local` 已添加到 `.gitignore`
- 密码不会被提交到git
- 仅存储在你本地

⚠️ **注意事项**：
- 不要分享 `.env.local` 文件
- 定期更换密码
- 使用访问令牌代替真实密码（推荐）

---

## 🚀 部署到Vercel

推送成功后：
1. 访问 https://vercel.com/new
2. 选择 **Gitee** 作为代码源
3. 选择 `dnf-enhancement-predictor` 仓库
4. 点击 **Deploy**
5. 部署成功后，将外网地址填入 `.env.local` 的 `VERCEL_URL`

---

## 📚 参考链接

- Gitee令牌：https://gitee.com/profile/personal_access_tokens
- GitHub令牌：https://github.com/settings/tokens
- Vercel部署：https://vercel.com/new
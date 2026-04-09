# 🚀 使用Gitee部署指南

## 步骤1：创建Gitee仓库

1. **访问Gitee：** https://gitee.com/projects/new
2. **填写信息：**
   - 仓库名称：`dnf-enhancement-predictor`
   - 仓库介绍：`DNF增幅预测器 - 基于贝叶斯概率的增幅时机预测工具`
   - 是否公开：选择 **公开** 或 **私有**
   - 初始化仓库：**不要勾选**任何选项
3. **点击"创建"按钮**

## 步骤2：推送代码

创建仓库后，**告诉我你的Gitee用户名**，或者直接运行：

```bash
# 切换到Gitee远程仓库（替换 YOUR_USERNAME）
git remote set-url origin https://gitee.com/YOUR_USERNAME/dnf-enhancement-predictor.git

# 推送代码
git push -u origin main
```

## 步骤3：使用Vercel部署（支持Gitee）

1. 访问：https://vercel.com/new
2. 选择 **"Gitee"** 作为代码源
3. 授权Vercel访问你的Gitee仓库
4. 选择 `dnf-enhancement-predictor` 仓库
5. 点击 **"Deploy"**
6. 等待1分钟...

**完成！** 你会获得外网访问地址。

---

## 🎯 你的Gitee用户名是什么？

告诉我后，我立即帮你执行推送命令！

import { defineEventHandler, getQuery } from 'h3';
import fs from 'node:fs';
import path from 'node:path';

export default defineEventHandler(async (event) => {
  try {
    // 获取请求参数
    const query = getQuery(event);
    const filePath = query.path as string;

    // 确保文件路径有效并限制只能读取项目内的文件
    if (!filePath || typeof filePath !== 'string' || filePath.includes('..')) {
      return {
        error: '无效的文件路径',
      };
    }

    // 获取项目根目录路径
    const rootDir = process.cwd();
    console.log('rootDir :>> ', rootDir);
    const fullPath = path.join(rootDir, 'server/api/app-cache', filePath);
    console.log('filePath :>> ', filePath);
    console.log('fullPath :>> ', fullPath);

    // 检查文件是否存在
    if (!fs.existsSync(fullPath)) {
      return {
        error: `文件不存在: ${filePath}`,
      };
    }

    // 读取文件内容
    const content = fs.readFileSync(fullPath, 'utf-8');
    return content;
  } catch (error) {
    console.error('读取文件失败:', error);
    return {
      error: '读取文件失败',
    };
  }
});

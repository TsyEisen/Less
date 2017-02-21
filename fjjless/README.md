### 安装less
	#确保node npm 已安装
	#全局安装 npm install -g less
	#初始化 npm init 
	#项目目录下安装 npm install less --save

###修改package.json命令，配置终端node运行程序的命令，以后运行直接使用npm start
	#修改scrpit内容：
	"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ./index.js"
  },

###查看全局命令行安装的目录
	#npm root -g

###查看全局命令行安装的目录
	#npm root -g

	比如查询结果：C:\Users\Administrator\AppData\Roaming\npm\node_modules

###把写好的项目拷贝到全局命令行安装的目录下
(C:\Users\Administrator\AppData\Roaming\npm\node_modules)

   # .cmd文件决定终端下输入什么命令执行代码
   配置.cmd  命名为：项目名.cmd（比如：fjjless.cmd）
   配置如下案例：
   @IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\fjjless\index.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\node_modules\fjjless\index.js" %*
)

###打开终端，在该项目下执行
C:\Users\Administrator\Desktop\fjjless>fjjless ./src/demo.less ./dist/demo.css
注意后两个参数是相对路径
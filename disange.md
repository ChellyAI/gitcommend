disange shi xiang yao qudiao de
用
git checkout -- disange.md
可以直接把修改了的文件还原

当
git add
后
用
git reset <HEAD>
可以将所有add的文件退回到上一个步骤中，因此再用checkout -- file就可以撤销修改

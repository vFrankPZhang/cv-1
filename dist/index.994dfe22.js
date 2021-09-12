let html=document.querySelector("#html"),style=document.querySelector("#style"),string="/* 你好，我叫Frank\n * 接下来我演示一下我的前端功底\n * 首先我要准备一个div\n **/\n#div1{\n    border: 1px solid rgba(0,0,0,0.5);\n    width: 200px;\n    height: 200px;\n}\n/* 接下来我把 div 变成一个八卦图\n * 注意看好了\n * 首先，把 div 变成一个圆\n **/\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n}\n/* 八卦是阴阳形成的\n * 一黑一白\n **/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* 加两个神秘的小球 */\n#div1::before{\n    width: 100px;\n    height: 100px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #000;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    width: 100px;\n    height: 100px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #fff;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);\n}\n",string2="",n=0,step=()=>{setTimeout((()=>{"\n"===string[n]?string2+="<br>":" "===string[n]?string2+="&nbsp;":string2+=string[n],html.innerHTML=string2,style.innerHTML=string.substring(0,n),window.scrollTo(0,99999),html.scrollTo(0,99999),n<string.length-1&&(n+=1,step())}),50)};step();
//# sourceMappingURL=index.994dfe22.js.map

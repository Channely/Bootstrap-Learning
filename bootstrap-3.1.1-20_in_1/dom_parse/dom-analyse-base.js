//------------------------------------------------H T M L - D O M-------------------------------------------------

//+++>属性++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var oHtml=document.documentElement;//可以直接访问<html>元素
console.log("节点名称 : "+oHtml.nodeName);//节点名称
console.log("节点类型 : "+oHtml.nodeType);//节点类型为 1
var oHead=oHtml.firstChild;//HEAD节点
var oBody=oHtml.lastChild;//BODY节点
var oHead=oHtml.childNodes.item(0);//HEAD节点
//var oHead=oHtml.childNodes[0];//简写,也有同样的结果是HEAD节点
var oBody=oHtml.childNodes.item(1);//BODY节点
//var oBody=oHtml.childNodes.item(1);//简写,也有同样的结果是BODY节点
var odocum=document.documentElement
var oBody=document.body;

//nodeType：显示节点的类型
//nodeName：显示节点的名称
//nodeValue：显示节点的值
//attributes：获取该节点的一个属性节点
//-----------导航-----------
//firstChild：表示某一节点的第一个节点
//lastChild：表示某一节点的最后一个子节点
//childNodes：表示所在节点的所有子节点
//parentNode：表示所在节点的父节点
//nextSibling：紧挨着当前节点的下一个节点
//previousSibling：紧挨着当前节点的上一个节点

//          nodeName
//元素节点      标签名相同
//属性节点      属性名相同
//文本节点      #text
//文档节点      #document

//          nodeValue
//元素节点      undefined 或 null
//文本节点      文本本身
//属性节点      属性值

//          NodeType
//元素节点	  1
//属性节点     2
//文本节点     3
//注释节点	  8
//文档节点     9


//+++>方法+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.body.getElementsByTagName('div')[0].style[document.body.getElementsByTagName('div')[0].style[document.body.getElementsByTagName('div')[0].style.length-1]]

document.getElementsByTagName("li");//返回相同的一组元素
document.getElementById("t").getAttributeNode("name");
document.getElementById("t").attributes["name"];
document.getElementById("p1").innerHTML="New text!";
document.getElementById("p2").style.color="blue";

//------------------------------------创建新的 HTML 元素 --------------------------------------------
//这段代码创建了一个新的 <p> 元素：
var para=document.createElement("p");
//如需向 <p> 元素添加文本，您首先必须创建文本节点。这段代码创建文本节点：
var node=document.createTextNode("This is a new paragraph.");
//然后您必须向 <p> 元素追加文本节点：
para.appendChild(node);
//这段代码查找到一个已有的元素：
var element=document.getElementById("div1");
//这段代码向这个已存在的元素追加新元素：
element.appendChild(para);

//getElementById()	返回带有指定 ID 的元素。
//getElementsByTagName()	返回包含带有指定标签名称的所有元素的节点列表（数组）。
//getElementsByClassName()	返回包含带有指定类名的所有元素的节点列表。
//hasChildNodes()方法：判定一个节点是否有子节点，有返回true，没有返回false
//removeChild()：去除一个节点
//appendChild()：添加一个节点
//replaceChild()：替换一个节点
//insertBefore()：在指定的子节点前面插入新的子节点。
//cloneNode()：复制一个节点
//createAttribute()	创建属性节点。
//createElement()	创建元素节点。
//createTextNode()	创建文本节点。
//getAttribute()	返回指定的属性值。
//setAttribute()	把指定属性设置或修改为指定的值。
//normalize()：（不知）

//-------------------------------------HTML 事件------------------------------------------------------
//HTML 事件的例子：
//当用户点击鼠标时 onmouseover="mOver(this)" onmouseout="mOut(this)" onmousedown="mDown(this)" onmouseup="mUp(this)"
//当网页已加载时    onload="checkCookies()
//当图片已加载时
//当鼠标移动到元素上时
//当输入字段被改变时 onchange="upperCase()
//当 HTML 表单被提交时
//当用户触发按键时   onclick="changetext(this)"

//<script>function changetext(id){ id.innerHTML="hello!"; }</script>
//<h1 onclick="changetext(this)">请点击这段文本!</h1>
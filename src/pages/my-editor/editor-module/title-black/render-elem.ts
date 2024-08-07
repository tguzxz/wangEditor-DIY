import { h, VNode } from 'snabbdom'
import { IDomEditor, SlateElement } from '@wangeditor/editor'
import {  IRenderElemConf } from '@wangeditor/core';

/**
 * render block quote elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */


function renderTitleBlack(
  elemNode: SlateElement,
  children: VNode[] | null,
  editor: IDomEditor
): VNode {

  const vnode = h(
    'div', 
    {
      style: { 
        padding: "10px", 
        margin: "5px 0px 0px", 
        // whiteSpace: "normal", 
        maxWidth: "100%", 
        lineHeight: "25px", 
        fontSize: "16px", 
        fontFamily: "微软雅黑", 
        borderTopLeftRadius: '4px', 
        borderTopRightRadius: '4px', 
        borderBottomRightRadius: '4px',
        borderBottomLeftRadius: "4px", 
        color: 'rgb(255, 255, 255)', 
        borderLeftColor: 'rgb(0, 187, 236)', 
        borderLeftWidth: '10px', 
        borderLeftStyle: 'solid', 
        boxShadow: 'rgb(153, 153, 153) 2px 2px 4px', 
        textShadow: 'rgb(34, 95, 135) 0px 1px 0px', 
        wordWrap: 'break-word', 
        boxSizing: 'border-box', 
        backgroundColor: 'rgb(55, 57, 57)'
       },
    }, 
    children)
  
  return vnode;
}

export const renderElemConf:IRenderElemConf = {
  type: 'title-black',
  renderElem: renderTitleBlack,
}

import { IDomEditor, SlateDescendant, SlateElement } from '@wangeditor/editor'

/**
 * 解析 HTML 字符串，生成“附件”元素
 * @param domElem HTML 对应的 DOM Element
 * @param children 子节点
 * @param editor editor 实例
 * @returns “附件”元素，如上文的 myResume
 */
function parseTitleBlackHtml(domElem: Element, children: SlateDescendant[], editor: IDomEditor): SlateElement {  // TS 语法
  const text = domElem.textContent

  const myResume = {
    type: 'title-black',
    children: [{text: text || ''}]
  }

  return myResume
}

export const parseHtmlConf = {
  selector: 'div[data-w-e-type="title-black"]', // data-w-e-type 属性，留给自定义元素，保证扩展性
  parseElemHtml: parseTitleBlackHtml,
}
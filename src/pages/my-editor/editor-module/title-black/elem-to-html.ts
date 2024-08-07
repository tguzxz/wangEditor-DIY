import { Element } from 'slate'

function titleBlackToHtml(elem: Element, childrenHtml: string): string {
  // // 获取附件元素的数据
  // const { key = String(new Date().getTime())} = elem

  return `<div data-w-e-type="title-black"
             style="padding: 10px; margin: 5px 0px 0px; max-width: 100%; line-height: 25px; font-size: 16px; font-family: 微软雅黑; border-top-left-radius: 4px; border-top-right-radius: 4px; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; color: rgb(255, 255, 255); border-left-color: rgb(0, 187, 236); border-left-width: 10px; border-left-style: solid; box-shadow: rgb(153, 153, 153) 2px 2px 4px; text-shadow: rgb(34, 95, 135) 0px 1px 0px; word-wrap: break-word; box-sizing: border-box; background-color: rgb(55, 57, 57);">${childrenHtml}</div>`
}

export const elemToHtmlConf = {
  type: 'title-black',
  elemToHtml: titleBlackToHtml
} 
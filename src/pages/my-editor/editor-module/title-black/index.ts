

import { IModuleConf } from '@wangeditor/core'
import { renderElemConf } from './render-elem'
import { elemToHtmlConf } from './elem-to-html'
import { parseHtmlConf } from './parse-elem-html'
import insertBreakPlugin from './insertBreakPlugin'

const TitleBlack: Partial<IModuleConf> = {
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  editorPlugin: insertBreakPlugin
}

export default TitleBlack
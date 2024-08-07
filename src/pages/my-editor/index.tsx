import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig, Boot } from '@wangeditor/editor'
import TitleBlack from './editor-module/title-black'

import '@wangeditor/editor/dist/css/style.css' // 引入 css

import './index.css';

const templateHtml = `<div style="padding: 10px; margin: 5px 0px 0px; max-width: 100%; line-height: 25px; font-size: 16px; font-family: 微软雅黑; border-top-left-radius: 4px; border-top-right-radius: 4px; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; color: rgb(255, 255, 255); border-left-color: rgb(0, 187, 236); border-left-width: 10px; border-left-style: solid; box-shadow: rgb(153, 153, 153) 2px 2px 4px; text-shadow: rgb(34, 95, 135) 0px 1px 0px; word-wrap: break-word; box-sizing: border-box; background-color: rgb(55, 57, 57);"
>1、在这里输入标题</div>`; // 自定义样式的原生html

Boot.registerModule(TitleBlack)

const MyEditor: React.FC = () => {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null) 

  // 编辑器内容
  const [html, setHtml] = useState('')

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {

  }, [])

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = { 
    insertKeys: {
      index: -1,
      keys: ['insertPostil']
    }
  } 

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {    // TS 语法
  // const editorConfig = {                         // JS 语法
      placeholder: '请输入内容...',
  }

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])

  const insertTitleBlank = () => {
    const node = {
      type: 'title-black',
      children: [{text: '1、在这里插入标题'}]
    }
    editor?.insertNode(node);
  }

  return (
    <>  
      <div className='container'>
        <div className='editor'>
          <div style={{ border: '1px solid #ccc', zIndex: 100}}>
            <Toolbar
              editor={editor}
              defaultConfig={toolbarConfig}
              mode="default"
              style={{ borderBottom: '1px solid #ccc' }}
            />
            <Editor
              defaultConfig={editorConfig}
              value={html}
              onCreated={setEditor}
              onChange={editor => setHtml(editor.getHtml())}
              mode="default"
              style={{ height: '500px',  overflowY: 'hidden' }}
            />
          </div>
          <div style={{ marginTop: '15px' }}>
            {html}
          </div>
        </div>
        <div className='diy-node'>
          点击下方添加自定义样式
          <div dangerouslySetInnerHTML={{ __html: templateHtml }}
            onClick={insertTitleBlank}>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyEditor
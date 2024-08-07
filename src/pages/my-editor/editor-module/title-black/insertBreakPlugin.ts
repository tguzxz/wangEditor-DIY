import { Editor, Transforms, Node, Point } from 'slate'
import { IDomEditor, DomEditor } from '@wangeditor/editor'

function insertBreakPlugin<T extends IDomEditor>(editor: T): T {
  const { insertBreak, insertText } = editor
  const newEditor = editor

  // 重写 insertBreak - 换行时插入 p
  newEditor.insertBreak = () => {

    const { selection } = newEditor
    if (selection == null) return insertBreak()
    const [nodeEntry] = Editor.nodes(editor, {
      match: n => {
        return DomEditor.checkNodeType(n, 'title-black')
      },
      universal: true,
    })
    
    if (!nodeEntry) return insertBreak()
    const elem = nodeEntry[0]
    const elemPath = DomEditor.findPath(editor, elem)
    const elemEndLocation = Editor.end(editor, elemPath)

    if (Point.equals(elemEndLocation, selection.focus)) {
      // 光标位于节点最后
      const str = Node.string(elem)
      if (str && str.slice(-1) === '\n') {
        // 节点的文本最后一个是 \n
        editor.deleteBackward('character') // 删除最后一个 \n

        // 则插入一个 paragraph
        const p = { type: 'paragraph', children: [{ text: '' }] }
        Transforms.insertNodes(newEditor, p, { mode: 'highest' })
        return
      }
    }

    // 正常情况，插入换行符
    insertText('\n')
  }

  // 返回 editor ，重要！
  return newEditor
}

export default insertBreakPlugin;
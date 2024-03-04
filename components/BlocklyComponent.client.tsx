'use client'
import React, { useEffect, useRef } from 'react';
import * as Blockly from 'blockly';

const BlocklyComponent: React.FC = () => {
  const blocklyDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let workspace: Blockly.WorkspaceSvg | null = null;

    if (blocklyDiv.current) {
      workspace = Blockly.inject(blocklyDiv.current, {
        toolbox: {
          kind: 'flyoutToolbox',
          contents: [
            {
              kind: 'block',
              type: 'controls_if'
            },
            {
              kind: 'block',
              type: 'logic_compare'
            },
            // 他のブロックを追加...
          ],
        },
      });
    }

    // コンポーネントのクリーンアップ時にワークスペースを破棄
    return () => {
      if (workspace) {
        workspace.dispose();
      }
    };
  }, []); // 依存配列が空なので、コンポーネントのマウント時に1回だけ実行されます

  return <div ref={blocklyDiv} style={{ height: '480px', width: '600px' }} />;
};

export default BlocklyComponent;

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Plate, usePlateEditor } from 'platejs/react';

import { Editor, EditorContainer } from '../registry/ui/editor';
import { TocSidebar } from '../registry/ui/toc-sidebar';

interface SDKProps {
    plugins: any[];
    value: any;
    placeholder?: string;
}

function EditorApp({ placeholder = 'Type here…', plugins, value }: SDKProps) {
    const editor = usePlateEditor({ plugins, value  });

    return (
        <Plate editor={editor}>
            <TocSidebar className="top-[130px]" topOffset={30} />
            <EditorContainer>
                <Editor variant="demo" placeholder={placeholder} />
            </EditorContainer>
        </Plate>
    );
}

export function mountPlateEditor(target: HTMLElement, props: SDKProps) {
    const root = ReactDOM.createRoot(target);
    root.render(<EditorApp {...props} />);
}

import BlotFormatter from 'quill-blot-formatter';
import 'quill/dist/quill.snow.css';
import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';

import './styles.css';

const Editor = () => {
  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} }
  });
  const [content, setContent] = useState('');

  if (Quill && !quill) {
    Quill.register('modules/blotFormatter', BlotFormatter);
  }

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        setContent(quill.root.innerHTML);
      });
    }
  }, [quill, Quill]);

  return (
    <div>
      <div ref={quillRef} />
      <div className="preview">
        <h2>Preview</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Editor;

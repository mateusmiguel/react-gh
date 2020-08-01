/**
 * @type file
 *
 * Componente Upload
 *
 */

import React from 'react';

const UploadFile = () => (
  <div className="upload">
    <div className="upload-information">
      <span>historico.jpg</span>
      <span>1.3mb</span>
    </div>
    <div className="upload-actions">
      <button>Escolher arquivo</button>
      <button>Excluir</button>
    </div>
  </div>
);


export default UploadFile;

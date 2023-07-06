import { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export function Poc() {
  const [files] = useState([]);
  return (
    <div>
      <FilePond
        files={files}
        allowMultiple={true}
        maxFiles={3}
        server="/api"
        name="files" /* sets the file input name, it's filepond by default */
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}

export default Poc;

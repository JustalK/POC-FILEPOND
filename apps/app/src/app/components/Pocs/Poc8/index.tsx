import { useState } from 'react';
import { getServerUrl } from '../../../../libs/utils';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css';
import { FilePond, registerPlugin } from 'react-filepond';

import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';

registerPlugin(FilePondPluginImageResize, FilePondPluginImageTransform);

export function Poc() {
  const [files, setFiles] = useState<any>([]);
  return (
    <div>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        filePosterMaxHeight={256}
        server={getServerUrl('poc8')}
        name="files"
        labelIdle='<span class="filepond--label-action">Browse</span> / Edit the upload'
        allowImageResize={true}
        imageResizeTargetWidth={200}
        imageResizeTargetHeight={200}
        imageResizeMode={'cover'}
      />
    </div>
  );
}

export default Poc;

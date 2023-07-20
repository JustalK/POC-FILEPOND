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
        server={getServerUrl('poc9')}
        name="files"
        labelIdle='<span class="filepond--label-action">Browse</span> / Edit the upload'
        allowImageResize={true}
        imageResizeTargetWidth={500}
        imageResizeTargetHeight={500}
        imageResizeMode={'contain'}
        imageTransformBeforeCreateBlob={(canvas: any) =>
          new Promise((resolve) => {
            const ctx = canvas.getContext('2d');
            ctx.globalAlpha = 0.5;
            ctx.fillRect(0, 0, 500, 60);

            ctx.globalAlpha = 1.0;
            ctx.font = '25px serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText('Justal Kevin', 10, 50);

            console.log('imageTransformBeforeCreateBlob', ctx, canvas);

            resolve(canvas);
          })
        }
      />
    </div>
  );
}

export default Poc;

module.exports = {
    saveToDiskNew: function(fileURL, fileName) {
        if (!window.ActiveXObject) {
            var save = document.createElement('a');
            save.href = fileURL;
            save.target = '_blank';
            save.download = fileName || 'unknown';
            var event = document.createEvent('Event');
            event.initEvent('click', true, true);
            save.dispatchEvent(event);
            (window.URL || window.webkitURL).revokeObjectURL(save.href);
        } else if (!!window.ActiveXObject && document.execCommand) {
            var _window = window.open(fileURL, '_blank');
            _window.document.close();
            _window.document.execCommand('SaveAs', true, fileName || fileURL)
            _window.close();
        }
    },
    saveToDiskOld: function(fileURL, fileName) {
        if (!window.ActiveXObject) {
            var save = document.createElement('a');
            save.href = fileURL;
            save.target = '_blank';
            save.download = fileName || fileURL;
            var evt = document.createEvent('MouseEvents');
            evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0,
                false, false, false, false, 0, null);
            save.dispatchEvent(evt);
            (window.URL || window.webkitURL).revokeObjectURL(save.href);
        } else if (!!window.ActiveXObject && document.execCommand) {
            var _window = window.open(fileURL, "_blank");
            _window.document.close();
            _window.document.execCommand('SaveAs', true, fileName || fileURL)
            _window.close();
        }
    },
    saveToDiskBlob: function(blobURL, fileName) {
        var reader = new FileReader();
        reader.readAsDataURL(blobURL);
        reader.onload = function(event) {
            var save = document.createElement('a');
            save.href = event.target.result;
            save.target = '_blank';
            save.download = fileName || 'unknown file';

            var event = document.createEvent('Event');
            event.initEvent('click', true, true);
            save.dispatchEvent(event);
            (window.URL || window.webkitURL).revokeObjectURL(save.href);
        };
    }
}

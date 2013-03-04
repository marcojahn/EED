<?php

class SimDB {

    public $filename;

    public function readData($dataType) {
        if ($dataType == 'lieferanten') {
            $this->filename = './lieferanten.data';
        } else {
            $this->filename = './bestellungen.data';
        }

        return $this->readFile($this->filename);
    }

    public function saveData($data) {
        $this->writeFile($this->filename, $data);
    }

    // @todo try/catch
    private function readFile($file) {
        $content = file_get_contents($file, FILE_USE_INCLUDE_PATH);

        if (!$content) {
            $content = array();
            $this->saveData($content);

            $content = file_get_contents($file, FILE_USE_INCLUDE_PATH);
        }

        return unserialize($content);
    }

    // @todo try/catch
    private function writeFile($file, $data) {
        if (is_writable($file)) {
            if (!$handle = fopen($file, "w")) {
                exit;
            }

            // Schreibe $somecontent in die geöffnete Datei.
            if (!fwrite($handle, serialize($data))) {
                exit;
            }

            fclose($handle);
        } else {
            // @todo handle
        }
    }
}
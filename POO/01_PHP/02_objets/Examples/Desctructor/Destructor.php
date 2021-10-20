<?php

class ReadFile{
    private string $fileName;

    public function __construct(string $fileName)
    {
        $this->fileName = $fileName;
    }

    public function read(){
        $file = fopen($this->fileName, "r");

        var_dump(fread($file, filesize($file) ) );
    }
}
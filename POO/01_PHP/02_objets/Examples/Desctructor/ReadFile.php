<?php

class ReadFile{
    private string $fileName;
    private string $resource ;

    public function __construct(string $fileName)
    {
        $this->fileName = $fileName;
    }

    public function read():string{
        $this->resource = fopen($this->fileName, "r");

        return fread($this->resource, filesize($this->fileName) ) ;
    }
}
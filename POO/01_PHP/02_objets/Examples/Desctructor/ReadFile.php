<?php

class ReadFile{
    private string $fileName;
    private  $resource ;

    public function __construct(string $fileName)
    {
        $this->fileName = $fileName;
    }

    public function read():string{
        $this->resource = fopen($this->fileName, "r");

        return fread($this->resource, filesize($this->fileName) ) ;
    }

    public function __destruct()
    {
        var_dump("DESTRUCTOR");
        fclose($this->resource); // fermeture du fichier qui a été ouvert par la méthode read
    }
}
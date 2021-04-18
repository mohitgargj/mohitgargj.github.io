function reveallog(erro){
    var error = erro;
    var fileloc;
    fileloc = "../log.txt";
    if(fileloc)
    {
        fileLog=fileLog+error;
    }
    else{
        console.log("log file not found");
    }

}
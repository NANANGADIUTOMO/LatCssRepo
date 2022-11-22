
$(document).ready(function () {
    
    $("#btnsubmit").click(function () {
        $("#divAlert").removeClass("d-none");
        window.scrollTo(0, 0);
        const nama = $ ("#valnama").val();
        $("#textalert").html("hallo" + " "+ nama +" "+ "link sudah ditambahkan ke alamat email anda");
    });

    $("#btnclose").click(function () {
        $("#divAlert").addClass("d-none");
    });

    $("#pokkursi img").click(function () {
        const gambar = $(this).attr("src");
        $("#imgkursi").attr("src", gambar);
        $("#imgkursi").css("height","500px;");
        $("#imgkursi").css("width","500px");
    })

    // $("#buttondetail1").click(function () {
    //     $("#imgkursi").attr("src", "Asset Latihan Bootstrap/chair-1.png");
    //         $("#imgkursi").css("height","500px;");
    //         $("#imgkursi").css("width","500px");
    //     window.scrollTo(0, 0);     
    // });

    // $("#buttondetail2").click(function () {
    //     $("#imgkursi").attr("src", "Asset Latihan Bootstrap/chair-2.png");  
    //         $("#imgkursi").css("height","500px;");
    //         $("#imgkursi").css("width","500px");
    //     window.scrollTo(0, 0);     
    // });

    // $("#buttondetail3").click(function () {
    //     $("#imgkursi").attr("src", "Asset Latihan Bootstrap/chair-3.png");
    //         $("#imgkursi").css("height","500px;");
    //         $("#imgkursi").css("width","500px");
    //     window.scrollTo(0, 0);     
    // });

    // $("#buttondetail4").click(function () {
    //     $("#imgkursi").attr("src", "Asset Latihan Bootstrap/chair-4.png");
    //         $("#imgkursi").css("height","500px;");
    //         $("#imgkursi").css("width","500px");
    //     window.scrollTo(0, 0);     
    // });

    $("#btnsubmit2").click(function () {
        $("#divAlertship").removeClass("d-none");
        event.preventDefault();
        window.scrollTo(0, 0);
        const firstname = $ ("#firstname").val();
        const Lastname = $ ("#lastname").val();
        const alamat = $("#alamatrumah").val();
        $("#tulisanalert").html("hallo" + " "+ firstname +" "+ Lastname + " "+ "Barang akan Segera Dikirim ke" +" "+ alamat);
        $("#idcontent").addClass("d-none");
        $("#idfooter").addClass("d-none");
        $("#bawah").addClass("d-none");
        $("#imgpilihan").attr("src","as")

    });

    $("#btnkluar").click(function () {
        $("#divAlertship").addClass("d-none");
        $("#idcontent").removeClass("d-none");
        $("#idfooter").removeClass("d-none");
        $("#bawah").removeClass("d-none");
    });

});

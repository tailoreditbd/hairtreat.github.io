try {
    [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
    [Windows.Storage.Streams.IRandomAccessStreamWithContentType, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
    [Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime] | Out-Null
    [Windows.Graphics.Imaging.SoftwareBitmap, Windows.Graphics.Imaging, ContentType = WindowsRuntime] | Out-Null
    [Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType = WindowsRuntime] | Out-Null
    [Windows.Media.Ocr.OcrResult, Windows.Media.Ocr, ContentType = WindowsRuntime] | Out-Null

    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
    $genericOp = [Windows.Foundation.IAsyncOperation`1, Windows.Foundation, ContentType = WindowsRuntime]

    $path = "C:\Users\HP\Pictures\ss\New folder\screenshot_58.png"
    if (Test-Path $path) {
        Write-Output "=== OCR screenshot_58 ==="
        
        # 1. Get File
        $op1 = [Windows.Storage.StorageFile]::GetFileFromPathAsync($path)
        Start-Sleep -Milliseconds 100
        $specOp1 = $genericOp.MakeGenericType([Windows.Storage.StorageFile])
        $file = $specOp1.GetMethod("GetResults").Invoke($op1, $null)
        
        # 2. Open Stream
        $op2 = $file.OpenReadAsync()
        Start-Sleep -Milliseconds 100
        $specOp2 = $genericOp.MakeGenericType([Windows.Storage.Streams.IRandomAccessStreamWithContentType])
        $stream = $specOp2.GetMethod("GetResults").Invoke($op2, $null)
        
        # 3. Create Decoder
        $op3 = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
        Start-Sleep -Milliseconds 200
        $specOp3 = $genericOp.MakeGenericType([Windows.Graphics.Imaging.BitmapDecoder])
        $decoder = $specOp3.GetMethod("GetResults").Invoke($op3, $null)
        
        # 4. Get Bitmap
        $op4 = $decoder.GetSoftwareBitmapAsync()
        Start-Sleep -Milliseconds 200
        $specOp4 = $genericOp.MakeGenericType([Windows.Graphics.Imaging.SoftwareBitmap])
        $bitmap = $specOp4.GetMethod("GetResults").Invoke($op4, $null)
        
        # 5. Recognize
        $op5 = $engine.RecognizeAsync($bitmap)
        Start-Sleep -Milliseconds 500
        $specOp5 = $genericOp.MakeGenericType([Windows.Media.Ocr.OcrResult])
        $result = $specOp5.GetMethod("GetResults").Invoke($op5, $null)
        
        Write-Output $result.Text
        Write-Output ""
    } else {
        Write-Output "File not found: $path"
    }
} catch {
    Write-Output "Error: $_"
}

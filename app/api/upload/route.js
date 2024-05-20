import mime from 'mime'
import { join } from 'path'
import { stat, mkdir, writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req) {
  const formData = await req.formData()

  const image = formData.get('image') || null

  const buffer = Buffer.from(await image.arrayBuffer())
  const relativeUploadDir = `/uploads`

  const uploadDir = join(process.cwd(), 'public', relativeUploadDir)

  try {
    await stat(uploadDir)
  } catch (e) {
    if (e.code === 'ENOENT') {
      // This is for checking the directory is exist (ENOENT : Error No Entry)
      await mkdir(uploadDir, { recursive: true })
    } else {
      console.error(
        'Error while trying to create directory when uploading a file\n',
        e
      )
      return NextResponse.json(
        { error: 'Something went wrong.' },
        { status: 500 }
      )
    }
  }

  try {
    const ext =
      image.type == 'image/jpeg' ? 'jpg' : mime.getExtension(image.type)
    const filename = `image.${ext}`
    const filepath = `${uploadDir}/${filename}`
    const fileUrl = `${relativeUploadDir}/${filename}`
    await writeFile(filepath, buffer)

    // Save to database

    return NextResponse.json({ image: filepath })
  } catch (e) {
    console.error('Error while trying to upload a file\n', e)
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    )
  }
}

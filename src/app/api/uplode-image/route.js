
export const POST = async (req) => {
  try {
    const formData = await req.formData();
    const image = formData.get("image");

    if (!image) {
      return Response.json(
        { message: "Image is required" },
        { status: 400 }
      );
    }

    const imgbbFormData = new FormData();
    imgbbFormData.append("image", image);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.IMAGEBB_API_KEY }`,
      {
        method: "POST",
        body: imgbbFormData,
      }
    );

    const data = await response.json();

    if (!data.success) {
      return Response.json(
        { message: "Image upload failed" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      imageUrl: data.data.url,
      displayUrl: data.data.display_url,
    });
  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 500 }
    );
  }
};

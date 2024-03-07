import cloudinary from "cloudinary";

export default defineEventHandler(async (event) => {

  const envrinmental = useRuntimeConfig(event);
  cloudinary.v2.config({
    cloud_name: envrinmental.public.cloudinary.cloudName,
    api_key: envrinmental.public.cloudinary.apiKey,
    api_secret: envrinmental.secret
  });

  const data = await cloudinary.v2.search
    .with_field('context')
    .expression('resource_type:image')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();

  return {
    ...data
  }
});




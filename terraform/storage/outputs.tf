# --- aws-s3-ext-dns/storage/outputs.tf ---

output "main_bucket" {
  value = aws_s3_bucket.main
}

output "main_bucket_website_configuration" {
  value = aws_s3_bucket_website_configuration.hosting
}

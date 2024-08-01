# --- aws-s3-ext-dns/storage/main.tf ---

resource "aws_s3_bucket" "main" {
  bucket = var.domain_name

  tags = {
    Project = var.project_name
  }
  #local-exec on-delete empty bucket script
}

resource "aws_s3_bucket_policy" "access" {
  bucket = aws_s3_bucket.main.id
  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Sid" : "PublicReadGetObject",
          "Effect" : "Allow",
          "Principal" : "*",
          "Action" : "s3:GetObject",
          "Resource" : "arn:aws:s3:::${aws_s3_bucket.main.id}/*"
        }
      ]
    }
  )
}

resource "aws_s3_bucket_public_access_block" "main_public_access" {
  bucket                  = aws_s3_bucket.main.id
  block_public_acls       = true #all false originally
  block_public_policy     = false
  ignore_public_acls      = true
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "hosting" {
  bucket = aws_s3_bucket.main.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}


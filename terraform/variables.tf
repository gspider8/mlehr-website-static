# --- aws-s3-ext-dns/variables.tf ---

variable "region" {
  type    = string
  default = "us-east-1"
}

variable "project_name" {
  type    = string
  default = "mlehr"
}

variable "domain_name" {
  type    = string
  default = "mlehr.org"
}

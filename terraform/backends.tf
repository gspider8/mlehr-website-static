terraform {
  cloud {
    organization = "mlehr"

    workspaces {
      name = "mlehr-org"
    }
  }
}
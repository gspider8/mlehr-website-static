## Procedure
Prerequisites
  - Own a domain on non-route-53 registrar
Procedure
  1.  Create hosted zone manually
  2.  Comment out networking module and run terraform apply
  3.  Run file upload
        ```sh
        cd ../../.. # to basic-website dir
        ./iac/bin/put-object.sh <domain> <template-name>
        
        # for resume_website example
        ./iac/bin/put-object.sh mlehr.org resume-website
        ```
  4.  Create test alias record
      - type:               A
      - alias:              true
      - route traffic to:   domain s3 endpoint
      - routing policy:     simple
      - evaluate health:    true
  5.  Check http domain to see if it's working then delete record
  6.  Uncomment networking and terraform apply 

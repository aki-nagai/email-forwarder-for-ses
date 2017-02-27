# Amazon SES用のEメール転送システム (Lambda関数)
Amazon SESで受信したメールを任意のメール(Gmail)に転送するLmabda関数。

## 利用するAWSサービス
- Amazon SES...メール受信
- Amazon S3...受信したメールをRaw形式で保存
- AWS Lambda...受信したメールを転送

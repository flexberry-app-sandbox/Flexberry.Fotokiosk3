docker build --no-cache -f SQL\Dockerfile.PostgreSql -t fotokiosk3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t fotokiosk3/app ../..

import aspnet from "@/assets/techs/aspnet.png";
import ef from "@/assets/techs/ef.png";
import npgsql from "@/assets/techs/npgsql.png";
import redis from "@/assets/techs/redis.png";
import serilog from "@/assets/techs/serilog.png";
import xunit from "@/assets/techs/xunit.png";
import clickhouse from "@/assets/techs/clickhouse.png";
import testcontainers from "@/assets/techs/testcontainers.png";
import aws from "@/assets/techs/aws.png";
import otel from "@/assets/techs/otel.png";
import immediate from "@/assets/techs/immediateplatform.png";
import blazor from "@/assets/techs/blazor.png";

export const techList = {
    back: [
        {
            name: 'ASP.NET Core',
            image: aspnet
        },
        {
            name: 'Immediate.Apis',
            image: immediate
        },
        {
            name: 'Blazor',
            image: blazor
        },
        {
            name: 'EFCore',
            image: ef
        },
        {
            name: 'npgsql',
            image: npgsql
        },
        {
            name: 'Clickhouse.Driver',
            image: clickhouse
        },
        {
            name: 'StackExchange.Redis',
            image: redis
        },
        {
            name: 'Serilog',
            image: serilog
        },
        {
            name: 'AWSSDK.S3',
            image: aws
        },
        {
            name: 'xUnit',
            image: xunit
        },
        {
            name: 'testcontainers',
            image: testcontainers
        },
        {
            name: 'OpenTelemetry',
            image: otel
        },
    ]
} as const;
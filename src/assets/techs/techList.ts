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
type TechData = { name: string, image: ImageMetadata, link: string };

export const techList : { back: TechData[] } = {
    back: [
        {
            name: 'ASP.NET Core',
            image: aspnet,
            link: 'https://dotnet.microsoft.com/ru-ru/apps/aspnet'
        },
        {
            name: 'Immediate.Apis',
            image: immediate,
            link: 'https://github.com/ImmediatePlatform/Immediate.Apis/'
        },
        {
            name: 'Blazor',
            image: blazor,
            link: 'https://dotnet.microsoft.com/ru-ru/apps/aspnet/web-apps/blazor'
        },
        {
            name: 'EFCore',
            image: ef,
            link: 'https://learn.microsoft.com/ru-ru/ef/core/'
        },
        {
            name: 'npgsql',
            image: npgsql,
            link: 'https://www.npgsql.org/efcore/'
        },
        {
            name: 'Clickhouse.Driver',
            image: clickhouse,
            link: 'https://clickhouse.com/docs/integrations/csharp'
        },
        {
            name: 'StackExchange.Redis',
            image: redis,
            link: 'https://stackexchange.github.io/StackExchange.Redis/'
        },
        {
            name: 'Serilog',
            image: serilog,
            link: 'https://serilog.net/'
        },
        {
            name: 'AWSSDK.S3',
            image: aws,
            link: 'https://github.com/aws/aws-sdk-net/'
        },
        {
            name: 'xUnit',
            image: xunit,
            link: 'https://xunit.net/'
        },
        {
            name: 'testcontainers',
            image: testcontainers,
            link: 'https://testcontainers.com/?language=dotnet'
        },
        {
            name: 'OpenTelemetry',
            image: otel,
            link: 'https://opentelemetry.io/docs/languages/dotnet/'
        },
    ]
} as const;
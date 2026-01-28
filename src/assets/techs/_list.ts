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
import react from "@/assets/techs/react.png";
import tanstack from "@/assets/techs/tanstack.png";
import astro from "@/assets/techs/astro.png";
import tailwind from "@/assets/techs/tailwind.png";
import mui from "@/assets/techs/mui.png";
import shadcn from "@/assets/techs/shadcn.png";
import vite from "@/assets/techs/vite.png";
import zod from "@/assets/techs/zod.png";
import typescript from "@/assets/techs/typescript.png";
import yjs from "@/assets/techs/yjs.png";
import bootstrap from "@/assets/techs/bootstrap.png";
import openapi from "@/assets/techs/openapi.png";
import docker from "@/assets/techs/docker.png";
import traefik from "@/assets/techs/traefik.png";
import portainer from "@/assets/techs/portainer.png";
import postgres from "@/assets/techs/postgres.png";
import keycloak from "@/assets/techs/keycloak.png";
import gitea from "@/assets/techs/gitea.png";
import yandexCloud from "@/assets/techs/yandex-cloud.png";
import letsencrypt from "@/assets/techs/letsencrypt.png";
import seq from "@/assets/techs/seq.png";
import nginx from "@/assets/techs/nginx.png";

export type TechData = { name: string, image: ImageMetadata, link: string };
export const techStacks = ['backend', 'frontend', 'devops'] as const;
export type TechStack = typeof techStacks[number];

export const techList : Record<TechStack, TechData[]> = {
    backend: [
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
            name: 'OpenAPI',
            image: openapi,
            link: 'https://www.openapis.org/'
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
    ],
    frontend: [
        {
            name: 'React',
            image: react,
            link: 'https://react.dev/'
        },
        {
            name: 'TypeScript',
            image: typescript,
            link: 'https://www.typescriptlang.org/'
        },
        {
            name: 'Vite',
            image: vite,
            link: 'https://vite.dev/'
        },
        {
            name: 'Tanstack Start',
            image: tanstack,
            link: 'https://tanstack.com/start/latest'
        },
        {
            name: 'Astro',
            image: astro,
            link: 'https://astro.build/',
        },
        {
            name: 'TailwindCSS',
            image: tailwind,
            link: 'https://tailwindcss.com/'
        },
        {
            name: 'Material UI',
            image: mui,
            link: 'https://mui.com/material-ui/'
        },
        {
            name: 'ShadCN UI',
            image: shadcn,
            link: 'https://ui.shadcn.com/'
        },
        {
            name: 'Bootstrap',
            image: bootstrap,
            link: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/'
        },
        {
            name: 'zod',
            image: zod,
            link: 'https://zod.dev/'
        },
        {
            name: 'yjs',
            image: yjs,
            link: 'https://yjs.com'
        },
        {
            name: 'Blazor',
            image: blazor,
            link: 'https://dotnet.microsoft.com/ru-ru/apps/aspnet/web-apps/blazor'
        },
    ],
    devops: [
        {
            name: 'Docker',
            image: docker,
            link: 'https://www.docker.com/'
        },
        {
            name: 'Traefik',
            image: traefik,
            link: 'https://traefik.io/'
        },
        {
            name: 'Portainer',
            image: portainer,
            link: 'https://portainer.io/'
        },
        {
            name: 'PostgreSQL',
            image: postgres,
            link: 'https://www.postgresql.org/'
        },
        {
            name: 'Keycloak',
            image: keycloak,
            link: 'https://www.keycloak.org/'
        },
        {
            name: 'Gitea',
            image: gitea,
            link: 'https://about.gitea.com/'
        },
        {
            name: 'Yandex Cloud',
            image: yandexCloud,
            link: 'https://yandex.cloud/ru'
        },
        {
            name: 'Clickhouse',
            image: clickhouse,
            link: 'https://clickhouse.com'
        },
        {
            name: "Let's Encrypt",
            image: letsencrypt,
            link: 'https://letsencrypt.org/'
        },
        {
            name: 'Seq',
            image: seq,
            link: 'https://datalust.co/'
        },
        {
            name: 'Nginx',
            image: nginx,
            link: 'https://nginx.org/ru/'
        },
        {
            name: 'OpenTelemetry',
            image: otel,
            link: 'https://opentelemetry.io/docs/languages/dotnet/'
        }
    ]
} as const;
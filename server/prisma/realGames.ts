import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.game.create({
        data: {
            date: '2022-11-20T13:00:00.201Z',
            firstTeamCountryCode: 'QA',
            secondTeamCountryCode: 'EC',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-21T13:00:00.201Z',
            firstTeamCountryCode: 'SN',
            secondTeamCountryCode: 'NL',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T10:00:00.201Z',
            firstTeamCountryCode: 'QA',
            secondTeamCountryCode: 'SN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T13:00:00.201Z',
            firstTeamCountryCode: 'NL',
            secondTeamCountryCode: 'EC',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T12:00:00.201Z',
            firstTeamCountryCode: 'NL',
            secondTeamCountryCode: 'QA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T12:00:00.201Z',
            firstTeamCountryCode: 'EC',
            secondTeamCountryCode: 'SN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-21T10:00:00.201Z',
            firstTeamCountryCode: 'GB',
            secondTeamCountryCode: 'IR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-21T16:00:00.201Z',
            firstTeamCountryCode: 'US',
            secondTeamCountryCode: 'WL',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T07:00:00.201Z',
            firstTeamCountryCode: 'WL',
            secondTeamCountryCode: 'IR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T16:00:00.201Z',
            firstTeamCountryCode: 'GB',
            secondTeamCountryCode: 'US',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T16:00:00.201Z',
            firstTeamCountryCode: 'WL',
            secondTeamCountryCode: 'GB',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T16:00:00.201Z',
            firstTeamCountryCode: 'IR',
            secondTeamCountryCode: 'US',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T07:00:00.201Z',
            firstTeamCountryCode: 'AR',
            secondTeamCountryCode: 'SA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T13:00:00.201Z',
            firstTeamCountryCode: 'MX',
            secondTeamCountryCode: 'PL',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T10:00:00.201Z',
            firstTeamCountryCode: 'PL',
            secondTeamCountryCode: 'SA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T16:00:00.201Z',
            firstTeamCountryCode: 'AR',
            secondTeamCountryCode: 'MX',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T16:00:00.201Z',
            firstTeamCountryCode: 'PL',
            secondTeamCountryCode: 'AR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T16:00:00.201Z',
            firstTeamCountryCode: 'SA',
            secondTeamCountryCode: 'MX',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T10:00:00.201Z',
            firstTeamCountryCode: 'DK',
            secondTeamCountryCode: 'TN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T16:00:00.201Z',
            firstTeamCountryCode: 'FR',
            secondTeamCountryCode: 'AU',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T07:00:00.201Z',
            firstTeamCountryCode: 'TN',
            secondTeamCountryCode: 'AU',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T13:00:00.201Z',
            firstTeamCountryCode: 'FR',
            secondTeamCountryCode: 'DK',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T12:00:00.201Z',
            firstTeamCountryCode: 'TN',
            secondTeamCountryCode: 'FR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T12:00:00.201Z',
            firstTeamCountryCode: 'AU',
            secondTeamCountryCode: 'DK',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T10:00:00.201Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'JP',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T13:00:00.201Z',
            firstTeamCountryCode: 'ES',
            secondTeamCountryCode: 'CR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T07:00:00.201Z',
            firstTeamCountryCode: 'JP',
            secondTeamCountryCode: 'CR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T16:00:00.201Z',
            firstTeamCountryCode: 'ES',
            secondTeamCountryCode: 'DE',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T16:00:00.201Z',
            firstTeamCountryCode: 'JP',
            secondTeamCountryCode: 'ES',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T16:00:00.201Z',
            firstTeamCountryCode: 'CR',
            secondTeamCountryCode: 'DE',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T07:00:00.201Z',
            firstTeamCountryCode: 'MA',
            secondTeamCountryCode: 'HR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T16:00:00.201Z',
            firstTeamCountryCode: 'BE',
            secondTeamCountryCode: 'CA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T10:00:00.201Z',
            firstTeamCountryCode: 'BE',
            secondTeamCountryCode: 'MA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T13:00:00.201Z',
            firstTeamCountryCode: 'HR',
            secondTeamCountryCode: 'CA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T12:00:00.201Z',
            firstTeamCountryCode: 'HR',
            secondTeamCountryCode: 'BE',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T12:00:00.201Z',
            firstTeamCountryCode: 'CA',
            secondTeamCountryCode: 'MA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T07:00:00.201Z',
            firstTeamCountryCode: 'CH',
            secondTeamCountryCode: 'CM',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T16:00:00.201Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'RS',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T07:00:00.201Z',
            firstTeamCountryCode: 'CM',
            secondTeamCountryCode: 'RS',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T13:00:00.201Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'CH',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T16:00:00.201Z',
            firstTeamCountryCode: 'CM',
            secondTeamCountryCode: 'BR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T16:00:00.201Z',
            firstTeamCountryCode: 'RS',
            secondTeamCountryCode: 'CH',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T10:00:00.201Z',
            firstTeamCountryCode: 'UY',
            secondTeamCountryCode: 'KR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T13:00:00.201Z',
            firstTeamCountryCode: 'PT',
            secondTeamCountryCode: 'GH',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T10:00:00.201Z',
            firstTeamCountryCode: 'KR',
            secondTeamCountryCode: 'GH',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T16:00:00.201Z',
            firstTeamCountryCode: 'PT',
            secondTeamCountryCode: 'UY',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-02T12:00:00.201Z',
            firstTeamCountryCode: 'KR',
            secondTeamCountryCode: 'PT',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-02T12:00:00.201Z',
            firstTeamCountryCode: 'GH',
            secondTeamCountryCode: 'UY',
        }
    })

}
main()

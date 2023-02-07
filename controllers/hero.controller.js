const { where } = require("sequelize");
const {Hero} = require("../models");
const {Power} = require("../models")

module.exports.createHero = async(req, res, next) => {

    try {
        const {body} = req;

        const newHero = await Hero.create(body);

        if(body.powerName.length) {

            const powers = powerName.map (power => ({
                name: power,
            }))

        const newpower = await Power.bulkCreate(powers, {
            returning: true
        })
        await newHero.addPower(newpower)
        }
        res.status(201).send({data: newHero})
    } catch (error) {
        next(error)
    }
}

module.exports.updateHero = async(req, res, next) => {
    try {
        const {params: {heroId}, body: {nickName, realName,  originDescription, catchPhrase, powerName}} = req;

        const updateHero = await Hero.update({nickName, realName,  originDescription, catchPhrase}, {
            where: {
                id: heroId
            }, returning: true
        })

        const ourHero = await Hero.findByPk(heroId);

        if(powerName.length) {
            const powers = powerName.map(power => ({
                name: power
            }))
            const newPower = await Power.bulkCreate(powers);
            await ourHero.addPower(newPower)
        }

        res.status(200).send(updateHero)

    } catch (error) {
        next(error)
    }
}

module.exports.getHeroes = async (req, res, next) => {
    try {
        const {pagination} = req;
        const heroes = await Hero.findAll({...pagination});
        res.status(200).send(heroes);

    } catch (error) {
        next(error);
    }
}


module.exports.getOneHeroes = async (req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const hero = await Hero.findByPk(heroId, {
            include: [
                {
                    model:Power,
                    attributes: ['id', 'name'],
                }
            ]
        });
        if(!hero) {
            throw new NotFoundError('Hero not found')
        }
        res.status(200).send(hero);

    } catch (error) {
        next(error);
    }
}

module.exports.deleteHero = async(req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const deleteHero = await Hero.destroy({
            where: {
            id: heroId
        }
    })
    res.status(200).send();
    } catch (error) {
        next(error)
    }
}
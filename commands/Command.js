module.exports = class Command {
    constructor (name, description, usage, aliases, category, enabled, guildOnly, ownerOnly, args, execute) {
        this.name = name;
        this.description = description;
        this.usage = usage;
        this.aliases = aliases;
        this.category = category;
        this.enabled = enabled;
        this.guildOnly = guildOnly;
        this.ownerOnly = ownerOnly;
        this.args = args;
        this.execute = execute;
    }

    getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	getDescription() {
		return this.description;
	}

	setDescription(description) {
		this.description = description;
	}

	getUsage() {
		return this.usage;
	}

	setUsage(usage) {
		this.usage = usage;
	}

	getAliases() {
		return this.aliases;
	}

	setAliases(aliases) {
		this.aliases = aliases;
	}

	getCategory() {
		return this.category;
	}

	setCategory(category) {
		this.category = category;
	}

	getEnabled() {
		return this.enabled;
	}

	setEnabled(enabled) {
		this.enabled = enabled;
	}

	getGuildOnly() {
		return this.guildOnly;
	}

	setGuildOnly(guildOnly) {
		this.guildOnly = guildOnly;
	}

	getOwnerOnly() {
		return this.ownerOnly;
	}

	setOwnerOnly(ownerOnly) {
		this.ownerOnly = ownerOnly;
	}

	getArgs() {
		return this.args;
	}

	setArgs(args) {
		this.args = args;
	}

	getExecute() {
		return this.execute;
	}

	setExecute(execute) {
		this.execute = execute;
	}

    getCommand() {
        return {
            name: this.name,
            description: this.description,
            usage: this.usage,
            aliases: this.aliases,
            category: this.category,
            enabled: this.enabled,
            guildOnly: this.guildOnly,
            ownerOnly: this.ownerOnly,
            args: this.args,
            execute: this.execute
        };
    }

    setCommand(command) {
        this.name = command.name;
        this.description = command.description;
        this.usage = command.usage;
        this.aliases = command.aliases;
        this.category = command.category;
        this.enabled = command.enabled;
        this.guildOnly = command.guildOnly;
        this.ownerOnly = command.ownerOnly;
        this.args = command.args;
        this.execute = command.execute;
    }
}